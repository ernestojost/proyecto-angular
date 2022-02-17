import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
  providers: [DataService]
})
export class IpComponent implements OnInit {

  ip: string = '';

  is_eu: Boolean = false;
  city: string = '';
  region: string = '';
  region_code: string = '';
  country_name: string = '';
  country_code: string = '';
  continent_name: string = '';
  continent_code: string = '';
  latitude: number = 0;
  longitude: number = 0;
  postal: string = '';
  calling_code: string = '';
  flag: string = '';
  emoji_flag: string = '';
  emoji_unicode: string = '';
  asn: string = '';
  asn_name: string = '';
  asn_domain: string = '';
  asn_route: string = '';
  asn_type: string = '';
  languages_name: string = '';
  languages_native: string = '';
  languages_code: string = '';
  currency_name: string = '';
  currency_code: string = '';
  currency_symbol: string = '';
  currency_native: string = '';
  currency_plural: string = '';
  time_zone_name: string = '';
  time_zone_abbr: string = '';
  time_zone_offset: string = '';
  time_zone_is_dst: Boolean = false;
  time_zone_current_time: string = '';
  threat_is_tor: Boolean = false;
  threat_is_proxy: Boolean = false;
  threat_is_anonymous: Boolean = false;
  threat_is_known_attacker: Boolean = false;
  threat_is_bogon: Boolean = false;
  count: string = '';
  

  constructor(private dataService: DataService) { 
    dataService.getIP().subscribe(data => {
      this.ip = data.ip;
      dataService.getDataByIP(this.ip).subscribe(data => {
        this.is_eu = data.is_eu;
        this.city = data.city;
        this.region = data.region;
        this.region_code = data.region_code;
        this.country_name = data.country_name;
        this.country_code = data.country_code;
        this.continent_name = data.continent_name;
        this.continent_code = data.continent_code;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.postal = data.postal;
        this.calling_code = data.calling_code;
        this.flag = data.flag;
        this.emoji_flag = data.emoji_flag;
        this.emoji_unicode = data.emoji_unicode;
        this.asn = data.asn.asn;
        this.asn_name = data.asn.name;
        this.asn_domain = data.asn.domain;
        this.asn_route = data.asn.route;
        this.asn_type = data.asn.type;
        this.languages_name = data.languages[0].name;
        this.languages_native = data.languages[0].native;
        this.languages_code = data.languages[0].code;
        this.currency_name = data.currency.name;
        this.currency_code = data.currency.code;
        this.currency_symbol = data.currency.symbol;
        this.currency_native = data.currency.native;
        this.currency_plural = data.currency.plural;
        this.time_zone_name = data.time_zone.name;
        this.time_zone_abbr = data.time_zone.abbr;
        this.time_zone_offset = data.time_zone.offset;
        this.time_zone_is_dst = data.time_zone.is_dst;
        this.time_zone_current_time = data.time_zone.current_time;
        this.threat_is_tor = data.threat.is_tor;
        this.threat_is_proxy = data.threat.is_proxy;
        this.threat_is_anonymous = data.threat.is_anonymous;
        this.threat_is_known_attacker = data.threat.is_known_attacker;
        this.threat_is_bogon = data.threat.is_bogon;
        this.count = data.count;
      })
    });
  }

  ngOnInit(): void {
  }

}
