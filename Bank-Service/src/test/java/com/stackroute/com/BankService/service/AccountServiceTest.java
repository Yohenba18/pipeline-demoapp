package com.stackroute.com.BankService.service;

import com.stackroute.com.BankService.constants.AccountType;
import com.stackroute.com.BankService.exceptions.CustomException;
import com.stackroute.com.BankService.model.AccountModel;
import com.stackroute.com.BankService.model.BankModel;
import com.stackroute.com.BankService.repository.AccountRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootTest
public class AccountServiceTest {

    @Mock
    private AccountRepository accountRepository;

	@InjectMocks
    private AccountService accountService;

	private AccountModel account;

    @BeforeEach
	public void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);

	}
    @AfterEach
	public void tearDown() {
		account = null;
	}
    @Test
    public void testAddAccountDetails() throws CustomException{
		AccountModel account = new AccountModel();
		account.setAccountNumber("12345");
		account.setUserEmailId("test@gmail.com");
		account.setAccountType(AccountType.CURRENT);
		account.setBalance(123445);
		account.setBankBranch("DELHI");
		account.setBankModel(new BankModel(1234,"SBI", "123455678"));
		Mockito.when(accountRepository.save(account)).thenReturn(account);


	}
	@Test
	public void testViewAllAccounts() {
		AccountModel account = new AccountModel();
		account.setAccountNumber("12345");
		account.setUserEmailId("test@gmail.com");
		account.setAccountType(AccountType.CURRENT);
		account.setBalance(123445);
		account.setBankBranch("DELHI");
		account.setBankModel(new BankModel(1234,"SBI", "123455678"));
		accountRepository.save(account);
		accountService.viewAllAccounts();
	}

	@Test
	public void testGetAccount() throws CustomException {
		AccountModel account = new AccountModel();
		account.setAccountNumber("12345");
		account.setUserEmailId("test@gmail.com");
		account.setAccountType(AccountType.CURRENT);
		account.setBalance(123445);
		account.setBankBranch("DELHI");
		account.setBankModel(new BankModel(1234,"SBI", "123455678"));
		accountService.addAccountDetails(account);
		accountService.getAccount("12345");
	}
}


