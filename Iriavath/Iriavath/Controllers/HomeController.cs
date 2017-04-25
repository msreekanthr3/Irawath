using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Iriavath.Models;

namespace Iriavath.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        UserDataAccess udaObj = new UserDataAccess();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult UserWelcome()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult CheckLogin()
        {
            return View();
        }

        public ActionResult RegisterUser(UserInfo objUser)
        {
            
            int res= udaObj.RegisterUser(objUser);
            if (res >= 1)
            {
                return Json(new { success = true, responseText = "Registered Successfully" }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new { success = false, responseText = "Sorry nt reistered, Try again." }, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult CheckUser(string emaillogin, string passwordlogin)
        {
            int res = udaObj.CheckUser(emaillogin, passwordlogin);
            if (res >= 1)
            {
                return Json(new { success = true, responseText = "1" }, JsonRequestBehavior.AllowGet);              
            }
            else if (res > 0)
            {
                return Json(new { success = true, responseText = "Sorry invalid Username/Password." }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new { success = false, responseText = "Sorry invalid Username/Password." }, JsonRequestBehavior.AllowGet);
            }

        }

    }
}
