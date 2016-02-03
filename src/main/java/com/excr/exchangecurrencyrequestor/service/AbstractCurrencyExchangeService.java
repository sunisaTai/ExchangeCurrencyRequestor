package com.excr.exchangecurrencyrequestor.service;


import com.google.gson.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.Date;
import java.util.Properties;

public abstract class AbstractCurrencyExchangeService {
    protected static Logger LOGGER = LoggerFactory.getLogger(AbstractCurrencyExchangeService.class);
    protected String HRMSServer = "localhost:8016/epropREST/rest";
    protected static Properties connectProperties = null;

    protected String webServicesString = "";
    protected String resultString = "";

    protected RestTemplate restTemplate = new RestTemplate();
    protected JsonParser parser = new JsonParser();

    JsonSerializer<Date> ser = new JsonSerializer<Date>() {
        @Override
        public JsonElement serialize(Date src, Type typeOfSrc,
                                     JsonSerializationContext context) {
            return src == null ? null : new JsonPrimitive(src.getTime());
        }
    };

    JsonDeserializer<Date> deser = new JsonDeserializer<Date>() {
        @Override
        public Date deserialize(JsonElement json, Type typeOfT,
                                JsonDeserializationContext context) throws JsonParseException {
            return json == null ? null : new Date(json.getAsLong());
        }
    };

    protected Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy HH:mm").registerTypeAdapter(Date.class, deser).create();

    static {
        Resource resource = new ClassPathResource("/rest.server.properties");
        try{
            connectProperties = PropertiesLoaderUtils.loadProperties(resource);

        } catch (IOException e){
            LOGGER.error("Error : {}", e);
        }

    }


    public AbstractCurrencyExchangeService(){
        this.HRMSServer  = connectProperties.getProperty("RESTServer");
    }

    public String getHRMSServer() {
        return HRMSServer;
    }
    public void setHRMSServer(String HRMSServer) {
        this.HRMSServer = HRMSServer;
    }
    public String getWebServicesString() {
        return webServicesString;
    }
    public void setWebServicesString(String webServicesString) {
        this.webServicesString = webServicesString;
    }

    public String getResultString() {
        LOGGER.debug("request :{}",getWebServicesString());
        resultString  = restTemplate.getForObject(getWebServicesString(), String.class);
        return resultString;
    }

    public ResponseEntity<String> getResultStringByTypeHttpMethodAndBodyContent(String json, HttpMethod httpMethod, String url, RestTemplate restTemplate) {
        LOGGER.debug("url :{}", url);
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.add("Content-Type", "application/json; charset=utf-8");
        HttpEntity<String> entity = new HttpEntity<String>(json, headers);
        if(httpMethod==null){
            httpMethod = HttpMethod.GET;
        }
        ResponseEntity<String> reponseEntity = restTemplate.exchange(url, httpMethod, entity, String.class);
        return reponseEntity;
    }

    public ResponseEntity<String> upload(String json, HttpMethod httpMethod, LinkedMultiValueMap<String, Object> param) {
        LOGGER.debug("request :{}", getWebServicesString());
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<MultiValueMap<String, Object>>(param, headers);

        if(httpMethod==null){
            httpMethod = HttpMethod.GET;
        }
        ResponseEntity<String> reponseEntity = restTemplate.exchange(getWebServicesString(), httpMethod, requestEntity, String.class);
        return reponseEntity;
    }

}
