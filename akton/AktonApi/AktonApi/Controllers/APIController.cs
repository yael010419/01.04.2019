using AktonApi.DataAccessLayer;
using APIAkton.DataAccessLayer;
using APIAkton.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;

namespace APIAkton.Controllers
{
	
	public class APIController : ApiController
    {

		private readonly dBcloudant cloudantDB =new dBcloudant();

		
		[HttpPost]
		public async Task<dynamic> Create([FromBody] User user)
		{
			user = new User { id = "1", Phone = "11111" };
			return await cloudantDB.CreateAsync(user);
		}

		[HttpGet]
		
		public async Task<dynamic> GetAll()
		{
			return await cloudantDB.GetAllAsync();
		}

		[HttpPut]
		public async Task<string> Update(User user)
		{
			return await cloudantDB.UpdateAsync("", user);
		}

		[HttpDelete]
		public async Task<dynamic> Delete(User user)
		{
			return await cloudantDB.DeleteAsync("", "rev");
		}

	}
	}