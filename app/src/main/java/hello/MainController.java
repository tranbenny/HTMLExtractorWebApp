package hello;

import hello.HTMLExtractor.HTMLDocument;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.util.ArrayList;


@Controller
@EnableAutoConfiguration
public class MainController {

    @RequestMapping("/")
    @ResponseBody
    public String home() {
        return "Hello World!";
    }

    @RequestMapping("/api")
    public @ResponseBody ResponseFormat getFileOutput(@RequestParam(value="url", defaultValue="https://www.pitchbook.com") String url,
                                                      @RequestParam(value="fileName", defaultValue="output.txt") String fileName) {
        try {
            HTMLDocument htmlDocument = new HTMLDocument(url);
            ResponseFormat response = new ResponseFormat(url, fileName, htmlDocument.getOutputString(), htmlDocument.getSequences(), htmlDocument.getLinks());
            return response;
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return new ResponseFormat(url, "", "", new ArrayList<>(), new ArrayList<>());
    }

//
//    public static void main(String[] args) throws Exception {
//        SpringApplication.run(MainController.class, args);
//    }
}