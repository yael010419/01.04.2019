using System.Collections.Generic;

namespace APIAkton.Models
{
	public class User
	{
		public string id { get; set; }
		public string rev { get; set; }
		public string NameUser { get; set; }

		public string Email { get; set; }

		public string password { get; set; }


		public string Phone { get; set; }

		public string DiscriptionAboutUser { get; set; }

		public int AudioId { get; set; }

		public virtual Audio Audio { get; set; }

		public virtual ICollection<Comment> Comment { get; set; }
	}
}