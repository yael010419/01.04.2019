using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIAkton.Models
{
	public class Audio
	{

		public int IdAudio { get; set; }


		public string streamName { get; set; }

		public string vodName { get; set; }

		public string creationDate { get; set; }

		public int duration { get; set; }

		public int fileSize { get; set; }

		public string filePath { get; set; }

		public int streamId { get; set; }

		public virtual ICollection<Comment> Comment { get; set; }

		public virtual ICollection<User> User { get; set; }

	}
}