package com.example.javaProject.controller;

import com.example.javaProject.vo.JoinVO;
import com.example.javaProject.vo.ResultVO;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class JoinController {

    @PostMapping("/join")
//  @RequestMapping(value = "/join", method = RequestMethod.POST)
    public @ResponseBody ResultVO join(@RequestBody JoinVO joinVO) {
        ResultVO resultVO = new ResultVO();

        resultVO.setStatus(200);
        resultVO.setMessage("성공했습니다.");

        System.out.println(joinVO.toString());

        return resultVO;
    }
}