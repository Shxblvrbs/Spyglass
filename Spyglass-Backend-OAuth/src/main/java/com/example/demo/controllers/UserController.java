package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticatedPrincipal;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.OAuth2AuthenticatedPrincipal;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

//import com.example.demo.models.User;
//import com.example.demo.services.UserService;

import java.util.Map;
import java.util.Optional;

//@RestController
//@RequestMapping("/users")
//public class UserController {
//    private final UserService userService;
//
//    @Autowired
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<User> getUserById(@PathVariable Long id) {
//        Optional<User> user = userService.getUserById(id);
//        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
//                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
//}


// 2:05:00 FOR FRONTEND LINK
@Controller
@CrossOrigin(allowCredentials = "true", originPatterns = "http://localhost:3000") // add as many as you want
public class UserController {
	
	@Autowired
	private OAuth2AuthorizedClientService clientService;
	
	// Endpoint that redirects the user to frontend application (S3 bucket, localhost:5173)
	//ASK SEAN ABOUT WHAT TO IMPORT HERE
	// JSESSIONID cookie established
	
	@GetMapping("/signin")
	public RedirectView redirectView() {
		RedirectView redirectView = new RedirectView("http://localhost:3000");
		return redirectView;
	}
	
	@GetMapping("/userinfo")
	@ResponseBody //Send the data as json 1:57:27
	public Map<String, Object> userInfo(@AuthenticationPrincipal OAuth2User user) {
		
		//Return info about user
		return user.getAttributes();
	}
	
	//Return access token
	//QUESTION FOR SEAN
	@GetMapping("/access")
	@ResponseBody
	public String accessToken(Authentication auth) {
		if (auth instanceof OAuth2AuthenticatedPrincipal) {
			OAuth2AuthenticationToken authToken = (OAuth2AuthenticationToken) auth;
			OAuth2AuthorizedClient client = clientService.loadAuthorizedClient(authToken.getAuthorizedClientRegistrationId(), 
					authToken.getName());
			return client.getAccessToken().getTokenValue();
		}
		
		return "";
	}
	
	//Return id token
	@GetMapping("/id")
	@ResponseBody
	public String idToken(@AuthenticationPrincipal OAuth2User user) {
		return ((DefaultOidcUser) user).getIdToken().getTokenValue();
	}
	
}








