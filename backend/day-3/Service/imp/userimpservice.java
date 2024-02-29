package com.enquiry.system.Service.imp;
// package com.project.emsbackend.service.impl;

import java.util.ArrayList;
import java.util.List;
// import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.enquiry.system.dto.userdto;
import com.enquiry.system.Model.user;
import com.enquiry.system.Exception.userexception;
import com.enquiry.system.Mapper.usermapper;
import com.enquiry.system.Repository.userrepository;
import com.enquiry.system.Service.userservice;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class userimpservice implements userservice {

    private userrepository userrepository;

    @Override
    public userdto createuser(userdto userdto) {

        user user = usermapper.maptouser(userdto);
        user saveduser = userrepository.save(user);
        return usermapper.maptouserdto(saveduser);
    }

    @Override
    public userdto getuserById(Long userId) {
        user user = userrepository.findById(userId)
                .orElseThrow(
                        () -> new userexception("user is not exist with given id : " + userId));

        return usermapper.maptouserdto(user);
    }

    @Override
    public List<userdto> getAlluser() {
        List<user> users = userrepository.findAll();

        List<userdto> userdtos = new ArrayList<>();
        for (user user : users) {
            userdtos.add(usermapper.maptouserdto(user));
        }

        return userdtos;
    }

}
