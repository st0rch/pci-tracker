//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MachinePCIWebAPIService
{
    using System;
    using System.Collections.Generic;
    
    public partial class PCIData
    {
        public int id { get; set; }
        public string hostname { get; set; }
        public bool AMStatus { get; set; }
        public bool BLStatus { get; set; }
        public bool FirewallRullStatus { get; set; }
        public bool FirewallContentStatus { get; set; }
        public bool SCCMStatus { get; set; }
        public bool MSBaselineStatus { get; set; }
        public System.DateTime UpdatedDate { get; set; }
    }
}
