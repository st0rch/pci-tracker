export interface Ipcidata {
    id: Int16Array;
    hostname: string;
    AMStatus: boolean;
    BLStatus: boolean;
    FirewallRuleStatus: boolean;
    FirewallContentStatus: boolean;
    SCCMStatus: boolean;
    MSBaselineStatus: boolean;
    UpdatedDate: Date;
    USBStatus: boolean;
}
