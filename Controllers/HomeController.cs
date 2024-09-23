using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Projects()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Azzier()
        {
            ViewBag.Message = "Azzier.";

            return View();
        }

        public ActionResult BBD()
        {
            ViewBag.Message = "Ballard Bus Data.";

            return View();
        }

        public ActionResult MAT()
        {
            ViewBag.Message = "Module Assembly Timer.";

            return View();
        }
    }
}