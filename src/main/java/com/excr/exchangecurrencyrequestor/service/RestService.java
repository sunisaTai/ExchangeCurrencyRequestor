package com.excr.exchangecurrencyrequestor.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Created by korrakote on 2/2/2559.
 */
@Service
public class RestService extends AbstractCurrencyExchangeService {

    static Logger logger = LoggerFactory.getLogger(RestService.class);

    public ResponseEntity<String> findExchangeCurrencyByDate(String date){
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://" + this.HRMSServer + "/exchangeCurrencys/findExchangeCurrencyByDate?date="+date;
        return getResultStringByTypeHttpMethodAndBodyContent("", HttpMethod.GET,url,restTemplate);
    }

}
