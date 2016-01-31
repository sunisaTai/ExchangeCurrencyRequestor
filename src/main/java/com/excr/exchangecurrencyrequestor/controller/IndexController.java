package com.excr.exchangecurrencyrequestor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

/**
 * Created by Korrakote on 30/1/2559.
 */

@Controller
@RequestMapping("/index")
public class IndexController {
    @RequestMapping(value = "/",produces = "text/html")
    public String Index(Model uiModel, Principal principal) {
        return "index";
    }
}
