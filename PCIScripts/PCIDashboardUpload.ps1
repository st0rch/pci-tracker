net use M: \\DR0-HLP-06\PCIDashboard
$AMDetails = Get-Content "M:\AMDetails\AMDetails.txt"
$AMDetailssplit = $AMDetails.Split("|")
$AMEngineVersionProper = $AMDetailssplit[0]
$AMProductVersionProper = $AMDetailssplit[1]
Get-ChildItem "M:\" -filter *.log | 
ForEach-Object{
    $Global:Content = Get-Content $_.FullName
    $ContentSplit = $Global:Content.Split("|")
    $Global:Hostname =$ContentSplit[0]
    $AMEngine = $ContentSplit[1]
    $AMProductVersion = $ContentSplit[2]
    $AMEnabled = $ContentSplit[3]
    if($AMEngin -eq $AMEnginVersionProper -and $AMProductVersion -eq $AMProductVersionProper -and $AmEnabled -eq 'True'){
        $Global:AMStatus = 1
    } else {
        $Global:AMStatus = 0
    }
    $BL = $ContentSplit[4]
    if($BL -eq 'Enabled'){
        $Global:BLStatus = 1
    } else {
        $Global:BLStatus = 0
    }
    $FirewallRules = $ContentSplit[5]
    if($FirewallRules -eq 'Enabled'){
        $Global:FirewallRulesStatus = 1
    } else {
        $Global:FirewallRulesStatus = 0
    }
    $FirewallContent= $ContentSplit[6]
    if($FirewallContent -eq 'Enabled'){
        $Global:FirewallContentStatus = 1
    } else {
        $Global:FirewallContentStatus = 0
    }
    $SCCM = $ContentSplit[7]
    if($SCCM -eq 'Enabled'){
        $Global:SCCMStatus = 1
    } else {
        $Global:SCCMStatus= 0
    }
    $MSBaseline = $ContentSplit[8]
    if($MSBaseline -eq 'Enabled'){
        $Global:MSBaselineStatus = 1
    } else {
        $Global:MSBaselineStatus = 0
    }
    $Date = $ContentSplit[9]
    $Status = [pscustomobject]@{
        Hostname = $Global:Hostname
        AMStatus = $Global:AMStatus
        BLStatus = $Global:BLStatus
        FirewallRuleStatus = $Global:FirewallRulesStatus
        FirewallContentStatus = $Global:FirewallContentStatus
        SCCMStatus = $Global:SCCMStatus
        MSBaselineStatus = $Global:MSBaselineStatus
        UpdatedDate = $Date
    }

    $StatusJson = $Status | ConvertTo-Json
    Write-Host $StatusJson
}