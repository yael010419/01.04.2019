namespace APIAkton.Models
{
	public class Comment
	{
		public int IdComment { get; set; }

		public string CreateData { get; set; }


		public string TextComment { get; set; }

		public int AudioId { get; set; }

		public int IdUser { get; set; }

		public virtual Audio Audio { get; set; }

		public virtual User User { get; set; }
	}
}