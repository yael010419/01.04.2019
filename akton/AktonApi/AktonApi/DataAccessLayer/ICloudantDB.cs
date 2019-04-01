using APIAkton.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APIAkton.DataAccessLayer
{
	public interface ICloudantDB
	{
		Task<dynamic> CreateAsync(object user);
		Task<dynamic> DeleteAsync(string id, string rev);
		Task<dynamic> GetAllAsync();
		Task<string> UpdateAsync(string id, User doc);
	}
}
