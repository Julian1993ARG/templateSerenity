using Microsoft.AspNetCore.Mvc;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;

namespace Puntonet.Common.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index([FromServices] ITwoLevelCache cache,
            [FromServices] ISqlConnections sqlConnections
            )
        {
            if(cache == null)
                throw new ArgumentNullException(nameof(cache));

            if(sqlConnections == null)
                throw new ArgumentNullException(nameof(sqlConnections));

            return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
        }
    }
}
