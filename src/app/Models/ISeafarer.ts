export interface ISeafarer{
  Data: ISeafarerData[]
  QualificationDetails: ISeafarerQualificationDetail[]
  Certificates: ISeafarerCertificates[]
  Languages: ISeafarerLanguages[]
  References: ISeafarerReferences[]
  WorkExperiences: ISeafarerWorkExperiences[]
}

export interface ISeafarerData{
  Id: number
  KinName: any
  KinPhone: any
  KinEmail: any
  PassPortIssueDate: any
  EmpId: number
  VisaSponsorId: number
  Remarks: string
  VisaIssueDate: any
  VisaExpiryDate: any
  EmployeeName: string
  SponsorName: string
  EmployeeCode: string
  JobName: string
  Nationality: string
  BirthDate: string
  Phone: string
  Mobile: string
  Email: string
  NationalId: string
  EmploymentDate: string
  InsuranceDate: any
  PassportExpireDate: any
  PassportNumber: string
  Age: string
  EmployeeNameAR: string
  EmployeeNameEN: string
  JobNameEN: string
  JobNameAR: string
  Salary: number
  Address: string
  Gender: string
  Religion: string
  InsuranceNumber: any
  Area: any
  MilitaryServiceExpireDate: any
  SyndicateCardNumber: any
  SyndicateExpirationDate: any
  BusinessPhone: any
  BirthPlace: string
  NationalIdExpiryDate: any
  Company: any
  PostCategoryLevel: any
  Tier: string
  DrivingLicenseNumber: any
  WorkPermit: any
  PermitNumber: any
  BloodType: any
  WorkLocation: any
  PermitExpirationDate: any
  Notes: any
  MedicalInsuranceAmount: any
  InsuranceTitle: any
  InsuranceOffice: any
  MedicalInsuranceNo: any
  MedicalInsuranceDate: any
  GraduationYear: any
  PostGraduateDegree: any
  PostGraduateUniversity: any
  PostGraduateSpecialty: any
  PostGraduateGrade: any
  PropationEndDate: string | Date
  EmpManager: string
  NameOfSpouse: string
  NoOfChildren: number
  BodyWeight: number
  Height: number
  VisaUAEIdNO: string
  NearestAirport: string
  ResidenceNumber: string
  SkypeID: string
  PermanentAddressHomeCountry: string
  ContactNumberHomeCountry: string
  ContactNameAndNumberDuringEmergenciesUAE: string
  ContactNameAndNumberDuringEmergenciesHome: string
  SeamanBookNO: string
  SeamanIssueDate: any
  SeamanExpiryDate: any
  CicpaNO: string
  CicpaIssueDate: any
  CicpaExpiryDate: any
  Declaration: string
  SignedOffFromAShipDueToMedicalReason: boolean
  SignedOffFromAShipDueToMedicalReasonComment: string
  UndergoneAnyMdicalOperation: any
  UndergoneAnyMdicalOperationComment: any
  DoctorConsultation: boolean
  DoctorConsultationComment: string
  HealthOrDisabilityProblem: boolean
  HealthOrDisabilityProblemComment: string
  InquiryOrInvolvedMaritimeAccident: boolean
  InquiryOrInvolvedMaritimeAccidentComment: string
  LicenseSuspendedOrRevoked: boolean
  LicenseSuspendedOrRevokedComment: string
  ConfirmationInsuranceDate: any
  MaritalStatus: string
  Status: number
  Basic: any
  Advanced: any
  FullLicence: any
  Maintenance: any
}

export interface ISeafarerQualificationDetail{
  Id: number
  SeaFarerId: number
  DegreeOrCourse: string
  MajorOrSubject: string
  CourseIssueDate: string
  ExpiryDate: string
  University: string
  Country: string
  Type: number
}


export interface ISeafarerCertificates{
  Id: number
  SeaFarerId: number
  Capacity: string
  Regulation: string
  IssueDate: string
  ExpiryDate: string
  IssuingAuthority: string
  Country: string
  Limitations: string
  Type: any
}

export interface  ISeafarerLanguages
{
    SeaFarerId: number
  Language: string
  Spoken: string
  Written: string
  Understood: string
  MotherTongue: string
  CreatedEmpId: number
  CreatedDate: string
  UpdatedEmpId: any
  UpdatedDate: any
  DeletedEmpId: any
  DeletedDate: any
  IsDeleted: boolean
  Id: number
}

export interface  ISeafarerReferences{
  SeaFarerId: number
  PersonName: string
  CompanyName: string
  Country: string
  Fax: string
  EmailId: string
  CreatedEmpId: number
  CreatedDate: string
  UpdatedEmpId: any
  UpdatedDate: any
  DeletedEmpId: any
  DeletedDate: any
  IsDeleted: boolean
  Id: number
}

export interface  ISeafarerWorkExperiences{
  Id: number
  SeaFarerId: number
  VesselName: string
  VesselType: string
  Rank: string
  From: string
  To: string
  GRT: string
  BHP: string
  CompanyName: string
}