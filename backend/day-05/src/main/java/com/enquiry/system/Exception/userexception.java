package com.enquiry.system.Exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class userexception extends RuntimeException {

    public userexception(String message) {
        super(message);
    }

}

