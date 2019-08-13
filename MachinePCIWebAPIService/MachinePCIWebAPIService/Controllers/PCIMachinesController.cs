using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MachinePCIWebAPIService.Controllers
{
    public class PCIMachinesController : ApiController
    {
        public IEnumerable<PCIData> Get()
        {
            using(PCIEntities entities = new PCIEntities())
            {
              return  entities.PCIDatas.ToList();
            }
        }

        public PCIData Get(int id)
        {
            using (PCIEntities entities = new PCIEntities())
            {
                return entities.PCIDatas.FirstOrDefault(e => e.id == id);
            }
        }
    }
}
