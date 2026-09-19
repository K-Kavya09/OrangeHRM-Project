import { test, expect } from '../fixtures/Base-fixture';
import { loginData } from '../test-data/LoginData';

test.describe('Orange HRM demo automation testing', () => {

  test.beforeEach(async ({ loginPage, page }) => {
    const username = loginData.username;
    const password = loginData.password;

    // Open OrangeHRM Login Page
    await loginPage.open();
    // Login
    await loginPage.login(username, password);
  
    // Verify Dashboard page
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Update user details in My Info page', async ({ page, loginPage }) => {

    await loginPage.clickMyInfo();

    await expect(page).toHaveURL(/viewPersonalDetails/);

    await loginPage.updateFirstName('Admin');
    await loginPage.updateMiddleName('Paul');
    await loginPage.updateLastName('Varun');

    await loginPage.updateEmpId('EMP1002');
    await loginPage.updateOtherId('OTH5002');
    await loginPage.updateDrivingLicenseId('DL445566');

    await loginPage.updateDLExpiryDate('2026-09-15');

    await loginPage.selectNationality('Indian');
    await loginPage.selectMaritalStatus('Married');

    await loginPage.updateDateOfBirth('1998-11-15');

    await loginPage.genderSelection();

    await loginPage.clickSave();


    await loginPage.clickAddButton();

    await loginPage.uploadAttachment('test-data/sample.pdf');

    await loginPage.enterComment('Sample attachment');

    await loginPage.saveAttachment();    
  });
});
