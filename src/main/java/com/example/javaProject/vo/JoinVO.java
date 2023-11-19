package com.example.javaProject.vo;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class JoinVO {
    String id;
    String password;
    String chkPassword;
}
