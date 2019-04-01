using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIAkton.Models
{
	public class AudioApi
	{
		//http://be.repoai.com:5080/WebRTCAppEE/rest/broadcast/getVodList/0/100?fbclid=IwAR2KtA5UL2bKmDN8mkHK_gcuzcIlmMdAyXUU-Gk61a41yeS76uHoBcoOqgM
		public static string path = "http://be.repoai.com:5080/WebRTCAppEE/";
		
		public string VodId { get; set; }
		public string VodName { get; set; }
		public string CreationDate { get; set; }
		public int FileSize { get; set; }
		public string FilePath { get; set; }
		public int Duration { get; set; }//משך
		public virtual ICollection<Comment> Comments { get; set; }
		public virtual ICollection<User> Users { get; set; }
		public string StreamId { get; set; }
	}
}