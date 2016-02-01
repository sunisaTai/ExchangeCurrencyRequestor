package com.excr.exchangecurrencyrequestor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Korrakote on 1/2/2559.
 */
@Controller
@RequestMapping("/exchangerates")
public class CurrencyExchangeRateController {

    @RequestMapping(value = "/view", params = "inquiry",produces = "text/html")
    public String inquiry(Model uiModel) {
        return "exchangerates/inquiry";
    }
}
