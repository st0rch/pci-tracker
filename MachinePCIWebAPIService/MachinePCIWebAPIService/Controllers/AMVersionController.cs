using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MachinePCIWebAPIService.Controllers
{
    public class AMVersionController : ApiController
    {
            public IEnumerable<AMVersionInfo> Get()
            {
                using (PCIEntities entities = new PCIEntities())
                {
                    return entities.AMVersionInfoes.ToList();
                }
            }

        public AMVersionInfo Get(int active)
        {
            using (PCIEntities entities = new PCIEntities())
            {
                return entities.AMVersionInfoes.FirstOrDefault(e => e.active == active);
            }
        }
    }
}