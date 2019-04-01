using APIAkton.DataAccessLayer;
using APIAkton.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace AktonApi.DataAccessLayer
{
	public class dBcloudant: ICloudantDB , IDisposable
	{
		private bool disposed = false;



		private readonly string user = "8f868d55-9901-402a-b69a-6880ad8b7b84-bluemix";
		private readonly string password = "e6d99932bdb09a30d8cd37bead01711c19a657c2cb1ea685fe965c631cf29fd3";
		private readonly string host = "https://8f868d55-9901-402a-b69a-6880ad8b7b84-bluemix:e6d99932bdb09a30d8cd37bead01711c19a657c2cb1ea685fe965c631cf29fd3@8f868d55-9901-402a-b69a-6880ad8b7b84-bluemix.cloudantnosqldb.appdomain.cloud";
		private readonly string databaseName = "elazaryael";
		public dBcloudant()
		{
			
			HttpClientHandler handler = new HttpClientHandler { Credentials = new NetworkCredential(user, password) };

		}




		public async Task<dynamic> GetAllAsync()
		{

			using ( var client = CreateHttpClient(new HttpClientHandler { Credentials = new NetworkCredential(user, password) }, user, databaseName))
			{
				using (var streamReader = new StreamReader( await client.GetStreamAsync(host)))
				{
					var responseContent = (JObject)JToken.ReadFrom(new JsonTextReader(streamReader));
					return responseContent.ToString();
				}
			}


		}
		public async Task<dynamic> CreateAsync( object doc)
		{
			using (var client = CreateHttpClient(new HttpClientHandler { Credentials = new NetworkCredential(user, password) }, user, databaseName))
			{
				var json = JsonConvert.SerializeObject(doc);

				var result = await client.PostAsync("", new StringContent(json, Encoding.UTF8, "application/json"));
				return result;
			}
		}

		private static HttpClient CreateHttpClient(HttpClientHandler handler, string user, string database)
		{
			return new HttpClient(handler)
			{
				BaseAddress = new Uri(string.Format("https://{0}.cloudant.com/{1}/", user, database))
			};
		}

		public async Task<dynamic> DeleteAsync( string id, string rev)
		{
			using (var client = CreateHttpClient(new HttpClientHandler { Credentials = new NetworkCredential(user, password) }, user, databaseName))
			{
				var result = await client.DeleteAsync(id + "?rev=" + rev);
				return result;
			}
		}

		public async Task<string> UpdateAsync(string id, User doc)
		{
			using (var client = CreateHttpClient(new HttpClientHandler { Credentials = new NetworkCredential(user, password) }, user, databaseName))
			{
				var json = JsonConvert.SerializeObject(doc);
				var result = await client.PutAsync(id, new StringContent(json, Encoding.UTF8, "application/json"));
				return result.StatusCode.ToString();
			}
		}
		private async Task<dynamic> Read(HttpClient client, string id)
		{
			var result = await client.GetAsync(id);

			return result;
		}

		public void Dispose()
		{
			throw new NotImplementedException();
		}

		class LoggingHandler : DelegatingHandler
		{
			protected override async Task<HttpResponseMessage> SendAsync(
				HttpRequestMessage request, System.Threading.CancellationToken cancellationToken)
			{
				Console.WriteLine("{0}\t{1}", request.Method, request.RequestUri);
				var response = await base.SendAsync(request, cancellationToken);
				Console.WriteLine(response.StatusCode);
				return response;
			}
		}

	
	}


}