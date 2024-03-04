package com.enquiry.system.Repository;


import org.springframework.data.jpa.repository.JpaRepository;


import com.enquiry.system.Model.userinfo;

import java.util.Optional;

public interface userinforepository extends JpaRepository<userinfo, Integer> {
    Optional<userinfo> findByName(String username);

}
