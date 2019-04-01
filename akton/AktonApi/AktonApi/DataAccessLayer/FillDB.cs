using AktonApi.DataAccessLayer;
using APIAkton.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;

namespace APIAkton.DataAccessLayer
{
	public class FillDB
	{
		ICloudantDB db  = new dBcloudant();


		public List<AudioApi> Api()
		{
			string res;
			WebClient client = new WebClient();
			client.Encoding = Encoding.UTF8;

			// Download string.
			string value = client.DownloadString("http://be.repoai.com:5080/WebRTCAppEE/rest/broadcast/getVodList/0/100?fbclid=IwAR2ciBwsYyLHAzgkkVHzzXnWultDQcKBevdrS8IFttP8zVgQ8JejJsEiSNA");

			// Write values.
			res = value;
			List<AudioApi> audio = JsonConvert.DeserializeObject<List<AudioApi>>(res);


			return audio;

		}
		public  void  FillAudio(List<AudioApi> audio)
		{
			
			if (audio!=null)
			{

				for (int i = 0; i < audio.Count; i++)
				{
					db.CreateAsync(audio[i]);
				}
			
			}
			
		}

		public void FillUsers()
		{
			
			User user = new User {  NameUser = "דניאל", password = "123456789",
				Phone = "122225ws6svgs2222", Email = "jjjfd@ddd",
				Comment = new List<Comment> { new Comment { IdUser=1} }, Audio = new Audio(),
				DiscriptionAboutUser = "only test", AudioId = 1 };
				 db.CreateAsync(user);
			
		}

	}
}