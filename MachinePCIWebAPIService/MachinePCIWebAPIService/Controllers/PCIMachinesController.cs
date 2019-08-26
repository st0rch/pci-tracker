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

        [HttpPost]
        public HttpResponseMessage PostPCIData([FromUri] bool PowershellPost, [FromBody] PCIData data)
        {
            
            var hostname = data.hostname;
            var AMStatus = data.AMStatus;
            var BLStatus = data.BLStatus;
            var FirewallRuleStatus = data.FirewallRullStatus;
            var FirewallContentStatus = data.FirewallContentStatus;
            var SCCMStatus = data.SCCMStatus;
            var MSBaselineStatus = data.MSBaselineStatus;
            var USBStatus = data.USBStatus;
            using (PCIEntities entities = new PCIEntities()) {
            var PCIList = entities.PCIDatas.Where(e => e.hostname == hostname).FirstOrDefault();

                if(PCIList != null)
                {
                  var CurrentId = PCIList.id;
                  entities.PCIDatas.Where(e => e.id == CurrentId).FirstOrDefault().hostname = hostname;
                  entities.PCIDatas.Where(e => e.id == CurrentId).FirstOrDefault().AMStatus = AMStatus;
                  entities.PCIDatas.Where(e => e.id == CurrentId).FirstOrDefault().BLStatus = BLStatus;
                  entities.PCIDatas.Where(e => e.id == CurrentId).FirstOrDefault().FirewallRullStatus = FirewallRuleStatus;
                  entities.PCIDatas.Where(e => e.id == CurrentId).FirstOrDefault().FirewallContentStatus = FirewallContentStatus;
                  entities.PCIDatas.Where(e => e.id == CurrentId).FirstOrDefault().SCCMStatus = SCCMStatus;
                  entities.PCIDatas.Where(e => e.id == CurrentId).FirstOrDefault().MSBaselineStatus = MSBaselineStatus;
                  entities.PCIDatas.Where(e => e.id == CurrentId).FirstOrDefault().USBStatus = USBStatus;
                  entities.PCIDatas.Where(e => e.id == CurrentId).FirstOrDefault().UpdatedDate = data.UpdatedDate;
                  entities.SaveChanges();
                  HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Accepted, CurrentId + "Updated");
                  
                  return response;
                } else
                {
                  PCIData NewPCIData = new PCIData()
                  {
                    hostname = hostname,
                    AMStatus = AMStatus,
                    BLStatus = BLStatus,
                    FirewallRullStatus = FirewallRuleStatus,
                    FirewallContentStatus = FirewallContentStatus,
                    SCCMStatus = SCCMStatus,
                    MSBaselineStatus = MSBaselineStatus,
                    USBStatus = USBStatus,
                    UpdatedDate = data.UpdatedDate
                  };
                  entities.PCIDatas.Add(NewPCIData);
                  entities.SaveChanges();
                  HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, hostname + "Created");
                  return response;
                }
              
            }
            
        } 
    }
}
