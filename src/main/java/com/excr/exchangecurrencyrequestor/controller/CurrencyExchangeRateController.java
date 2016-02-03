package com.excr.exchangecurrencyrequestor.controller;

import com.excr.exchangecurrencyrequestor.service.RestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Korrakote on 1/2/2559.
 */
@Controller
@RequestMapping("/exchangerates")
public class CurrencyExchangeRateController {

    @Autowired
    RestService restService;

    @RequestMapping(value = "/view", params = "inquiry",produces = "text/html")
    public String inquiry(Model uiModel) {
        return "exchangerates/inquiry";
    }
}
