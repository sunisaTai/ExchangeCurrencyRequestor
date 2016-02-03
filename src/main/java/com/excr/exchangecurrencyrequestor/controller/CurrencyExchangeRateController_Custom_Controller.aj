package com.excr.exchangecurrencyrequestor.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by korrakote on 2/2/2559.
 */
public aspect CurrencyExchangeRateController_Custom_Controller {

    @RequestMapping(value = "/findExchangeCurrencyByDate",method = RequestMethod.GET,headers = "Accept=application/json")
    public ResponseEntity<String> CurrencyExchangeRateController.findExchangeCurrencyByDate(@RequestParam(value = "date")String str_date){
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        return restService.findExchangeCurrencyByDate(str_date);
    }
}
