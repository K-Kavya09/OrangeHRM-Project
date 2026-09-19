import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly username: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;

  private readonly myInfoMenu: Locator;
  private readonly firstName: Locator;
  private readonly middleName: Locator;
  private readonly lastName: Locator;
  private readonly empId: Locator;
  private readonly otherId: Locator;
  private readonly drivingLicense: Locator;
  private readonly licenceExpiryDate: Locator;
  private readonly nationality: Locator;
  private readonly maritalStatus: Locator;
  private readonly dateOfBirth: Locator;
  private readonly gender: Locator;
  private readonly saveButton: Locator;

  private readonly addButton: Locator;
  private readonly browserUpload: Locator;
  private readonly commentBox: Locator;
  private readonly attachmentSaveButton: Locator;

  constructor(private readonly page: Page) {
    this.username = page.locator('input[placeholder="Username"]');
    this.password = page.locator('input[placeholder="Password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.myInfoMenu = page.getByRole('link', { name: 'My Info' });

    this.firstName = page.locator('input[name="firstName"]');
    this.middleName = page.locator('input[name="middleName"]');
    this.lastName = page.locator('input[name="lastName"]');

    this.empId = page.locator('(//input[contains(@class,"oxd-input oxd-input--active")])[2]');
    this.otherId = page.locator('(//input[contains(@class,"oxd-input oxd-input--active")])[3]');
    this.drivingLicense = page.locator('(//input[contains(@class,"oxd-input oxd-input--active")])[7]');

    this.licenceExpiryDate = page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]');
    this.dateOfBirth = page.locator('(//input[@placeholder="yyyy-dd-mm"])[2]');

    this.nationality = page.locator(
      '//label[text()="Nationality"]/following::div[contains(@class,"oxd-select-text")][1]'
    );

    this.maritalStatus = page.locator(
      '//label[text()="Marital Status"]/following::div[contains(@class,"oxd-select-text")][1]'
    );

    this.gender = page.locator('//label[normalize-space()="Female"]');

    this.saveButton = page.getByRole('button', { name: 'Save' }).first();

    this.addButton = page.getByRole('button', { name: 'Add' });

    this.browserUpload = page.locator('input[type="file"]');

    this.commentBox = page.locator('textarea');

    this.attachmentSaveButton = page.getByRole('button', { name: 'Save' }).last();
  }

  async open(): Promise<void> {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
  }

  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async clickMyInfo(): Promise<void> {
    await this.myInfoMenu.click();
  }

  async updateFirstName(name: string): Promise<void> {
    await this.firstName.fill(name);
  }

  async updateMiddleName(name: string): Promise<void> {
    await this.middleName.fill(name);
  }

  async updateLastName(name: string): Promise<void> {
    await this.lastName.fill(name);
  }

  async updateEmpId(id: string): Promise<void> {
    await this.empId.fill(id);
  }

  async updateOtherId(id: string): Promise<void> {
    await this.otherId.fill(id);
  }

  async updateDrivingLicenseId(id: string): Promise<void> {
    await this.drivingLicense.fill(id);
  }

  async updateDLExpiryDate(date: string): Promise<void> {
    await this.licenceExpiryDate.fill(date);
  }

  async selectNationality(nationality: string): Promise<void> {
    await this.nationality.click();
    await this.page.getByRole('option', { name: nationality }).click();
  }

  async selectMaritalStatus(status: string): Promise<void> {
    await this.maritalStatus.click();
    await this.page.getByRole('option', { name: status }).click();
  }

  async updateDateOfBirth(date: string): Promise<void> {
    await this.dateOfBirth.fill(date);
  }

  async genderSelection(): Promise<void> {
    await this.gender.click();
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async clickAddButton(): Promise<void> {
    await this.addButton.click();
  }

  async uploadAttachment(filePath: string): Promise<void> {
    await this.browserUpload.setInputFiles(filePath);
  }

  async enterComment(comment: string): Promise<void> {
    await this.commentBox.fill(comment);
  }

  async saveAttachment(): Promise<void> {
    await this.attachmentSaveButton.click();
  }
}