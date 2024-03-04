package com.enquiry.system.Service;

import java.util.List;

import com.enquiry.system.dto.userdto;

public interface userservice {
    userdto createuser(userdto userdto);

    userdto getuserById(Long userId);

    List<userdto> getAlluser();
}