package hello;

import java.util.ArrayList;

/**
 * Created by bennytran on 3/27/17.
 */
public class ResponseFormat {

    private String url;
    private String fileName;
    private String htmlOutput;
    private ArrayList<String> sequences;
    private ArrayList<String> links;



    public String getUrl() {
        return url;
    }

    public String getHtmlOutput() {
        return htmlOutput;
    }

    public ArrayList<String> getSequences() {
        return sequences;
    }

    public ArrayList<String> getLinks() {
        return links;
    }

    public String getFileName() {
        return fileName;
    }

    public ResponseFormat(String url, String fileName, String htmlOutput, ArrayList<String> sequences, ArrayList<String> links) {
        this.url = url;
        this.fileName = fileName;
        this.htmlOutput = htmlOutput;
        this.sequences = sequences;
        this.links = links;
    }




}
