package com.enquiry.system.Mapper;
import com.enquiry.system.dto.userdto;
import com.enquiry.system.Model.user;

public class usermapper {

    public static  userdto maptouserdto(user Users) {
        return new userdto(
                Users.getId(),
                Users.getFirstName(),
                Users.getLastName(),
                Users.getEmail(),
                Users.getQualification(),
                Users.getIntrest(),
                Users.getPassword()
                );
    }

    public static user maptouser(userdto userdto) {
        return new user(
            userdto.getId(),
            userdto.getFirstName(),
            userdto.getLastName(),
            userdto.getEmail(),
            userdto.getQualification(),
            userdto.getIntrest(),
            userdto.getPassword());
    }

}