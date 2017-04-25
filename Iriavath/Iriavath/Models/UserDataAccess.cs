using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.ApplicationBlocks.Data;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Iriavath.Models
{
    public class UserDataAccess
    {
        string constr = ConfigurationManager.ConnectionStrings["constr"].ConnectionString;
        public int RegisterUser(UserInfo uiObj)
        {
            
            SqlParameter[] spc = new SqlParameter[5];
            spc = SqlHelperParameterCache.GetSpParameterSet(constr, "InsertUser");
            spc[0].Value=uiObj.UserName.ToString();
            spc[1].Value=uiObj.Password;
            spc[2].Value=uiObj.Gender;
            spc[3].Value = uiObj.PhNumber;
            spc[4].Value = uiObj.Email;
            int res= SqlHelper.ExecuteNonQuery(constr,CommandType.StoredProcedure,"InsertUser",spc);
            return res;
        }

        public int CheckUser(string userName,string password)
        {
            
            SqlParameter[] spc = new SqlParameter[3];
            spc = SqlHelperParameterCache.GetSpParameterSet(constr, "CheckUser");
            spc[0].Value = userName;
            spc[1].Value =password;                    
            int res = (int)SqlHelper.ExecuteScalar(constr, CommandType.StoredProcedure, "CheckUser", spc);
            return res;
        }
    }
}