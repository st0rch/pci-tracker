export interface Ipcidata {
    id: Int16Array;
    hostname: string;
    AMStatus: boolean;
    BLStatus: boolean;
    FirewallRullStatus: boolean;
    FirewallContentStatus: boolean;
    SCCMStatus: boolean;
    MSBaselineStatus: boolean;
    UpdatedDate: Date;
}
