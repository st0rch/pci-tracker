$Global:Log = ""
$Global:AMEngine = ""
$Global:AMProductVersion = ""
$Global:AMEnabled = ""
$Global:BlStatus = ""
$Global:WMIRule = ""
$Global:FirewallStatus = ""
$Global:SCCMStatus = ""
$Global:MSBaselineStatus = ""
$Global:HostName
$Global:Date = Get-Date
$Global:HostName = HostName


Function Check-AMClient(){    
    $MPComputerStatus = Get-MpComputerStatus
    $Global:AMEngine = $MPComputerStatus.AMEngineVersion
    $Global:AMProductVersion = $MPComputerStatus.AMProductVersion
    $Global:AMEnabled = $MPComputerStatus.AMServiceEnabled
}

Function Check-Bitlocker(){
    $BLInfo = Get-BitLockerVolume -MountPoint C:
    if($BLInfo.ProtectionStatus -eq 'On'-and $BLInfo.EncryptionPercentage -eq '100'){
        $Global:BlStatus = 'Enabled'
        
    } else {
        $Global:BlStatus += 'NotEnabled'
    }
}

function Check-WMIPort() {
    If(Get-NetFirewallRule -DisplayName 'Windows Management Instrumentation (WMI-In)'){
        $Global:WMIRule = 'Enabled'
    } else {
        $Global:WMIRule = "NotEnabled"
    }
}

function Check-Firewall() {
    $Domain = Get-NetFirewallProfile -Name Domain
    $Private = Get-NetFirewallProfile -Name Private
    $Public = Get-NetFirewallProfile -Name Public
    If($Domain.Enabled -eq 'True' -and $Private.Enabled -eq 'True' -and $Public.Enabled -eq 'True'){
        $Global:FirewallStatus = "Enabled"
    } else {
        $Global:FirewallStatus = "NotEnabled"
    }
}

function Check-SCCM() {
    $SCCMService = get-Service -name 'SMS agent Host'
    if($SCCMService.Status -eq 'Running'){
        $Global:SCCMStatus = "Enabled"
    } else {
        $Global:SCCMStatus = "NotEnabled"
    }
}

Function Check-MSBaseline() {
    if(Test-Path 'HKLM:\SOFTWARE\1800Contacts\Helpdesk-Security'){
        $Global:MSBaselineStatus = "Enabled"
    } else {
        $Global:MSBaselineStatus = "NotEnabled"
    }

}

Check-AMClient
Check-Bitlocker
Check-WMIPort
Check-Firewall
Check-SCCM
Check-MSBaseline
if(Test-Path -Path "M:\$Global:Hostname.log"){
    Remove-Item -Path "M:\$Global:Hostname.log" -Force
}
net use M: \\DR0-HLP-06\PCIDashboard /user:Ztownes Bowling2007*
$Global:Log = $Global:HostName + "|" + $Global:AMEngine  + "|" + $Global:AMProductVersion + "|" + $Global:AMEnabled + "|" + $Global:BlStatus + "|" + $Global:WMIRule + "|" + $Global:FirewallStatus  + "|" + $Global:SCCMStatus + "|" + $Global:MSBaselineStatus + "|" +  $Date
Out-File -FilePath "M:\$Global:Hostname.log" -InputObject $Global:Log -Force
net use m: /delete