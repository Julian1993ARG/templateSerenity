﻿/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
declare namespace Puntonet.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace Puntonet.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Puntonet.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Puntonet.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Puntonet.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
    }
}
declare namespace Puntonet.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace Puntonet.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        RoleKey: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Puntonet.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Puntonet.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Puntonet.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Puntonet.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Puntonet.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Puntonet.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        RoleKey?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            RoleKey = "RoleKey"
        }
    }
}
declare namespace Puntonet.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Puntonet.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Puntonet.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Puntonet.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Puntonet.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Puntonet.Administration {
    enum TwoFactorAuthType {
        Email = 1,
        SMS = 2
    }
}
declare namespace Puntonet.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace Puntonet.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        Roles: Serenity.LookupEditor;
        MobilePhoneNumber: Serenity.StringEditor;
        MobilePhoneVerified: Serenity.BooleanEditor;
        TwoFactorAuth: Serenity.EnumEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Puntonet.Administration {
    interface UserListRequest extends Serenity.ListRequest {
    }
}
declare namespace Puntonet.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Puntonet.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Puntonet.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Puntonet.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Puntonet.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Puntonet.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Puntonet.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Puntonet.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Puntonet.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Puntonet.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        MobilePhoneNumber?: string;
        MobilePhoneVerified?: boolean;
        TwoFactorAuth?: TwoFactorAuthType;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        ImpersonationToken?: string;
        Roles?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            MobilePhoneNumber = "MobilePhoneNumber",
            MobilePhoneVerified = "MobilePhoneVerified",
            TwoFactorAuth = "TwoFactorAuth",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ImpersonationToken = "ImpersonationToken",
            Roles = "Roles",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Puntonet.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Puntonet.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Puntonet.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Puntonet.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailAddressEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Puntonet.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Puntonet.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Puntonet.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        TwoFactorGuid?: string;
        TwoFactorCode?: number;
    }
}
declare namespace Puntonet.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Puntonet.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Puntonet.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ConfirmEmail: Serenity.EmailAddressEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Puntonet.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Puntonet {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Puntonet.Texts {
    namespace Db {
        namespace Administration {
            namespace Language {
                const Id: string;
                const LanguageId: string;
                const LanguageName: string;
            }
            namespace Role {
                const RoleId: string;
                const RoleKey: string;
                const RoleName: string;
            }
            namespace RolePermission {
                const PermissionKey: string;
                const RoleId: string;
                const RolePermissionId: string;
                const RoleRoleName: string;
            }
            namespace Translation {
                const CustomText: string;
                const EntityPlural: string;
                const Key: string;
                const OverrideConfirmation: string;
                const SaveChangesButton: string;
                const SourceLanguage: string;
                const SourceText: string;
                const TargetLanguage: string;
                const TargetText: string;
            }
            namespace User {
                const DisplayName: string;
                const Email: string;
                const ImpersonationToken: string;
                const InsertDate: string;
                const InsertUserId: string;
                const IsActive: string;
                const LastDirectoryUpdate: string;
                const MobilePhoneNumber: string;
                const MobilePhoneVerified: string;
                const Password: string;
                const PasswordConfirm: string;
                const PasswordHash: string;
                const PasswordSalt: string;
                const Roles: string;
                const Source: string;
                const TwoFactorAuth: string;
                const UpdateDate: string;
                const UpdateUserId: string;
                const UserId: string;
                const UserImage: string;
                const Username: string;
            }
            namespace UserPermission {
                const Granted: string;
                const PermissionKey: string;
                const User: string;
                const UserId: string;
                const UserPermissionId: string;
                const Username: string;
            }
            namespace UserRole {
                const RoleId: string;
                const User: string;
                const UserId: string;
                const UserRoleId: string;
                const Username: string;
            }
        }
    }
    namespace Forms {
        namespace Membership {
            namespace ChangePassword {
                const FormTitle: string;
                const SubmitButton: string;
                const Success: string;
            }
            namespace ForgotPassword {
                const BackToLogin: string;
                const FormInfo: string;
                const FormTitle: string;
                const SubmitButton: string;
                const Success: string;
            }
            namespace Login {
                const FacebookButton: string;
                const ForgotPassword: string;
                const GoogleButton: string;
                const LoginToYourAccount: string;
                const OR: string;
                const RememberMe: string;
                const SignInButton: string;
                const SignUpButton: string;
            }
            namespace ResetPassword {
                const BackToLogin: string;
                const EmailSubject: string;
                const FormTitle: string;
                const SubmitButton: string;
                const Success: string;
            }
            namespace SignUp {
                const AcceptTerms: string;
                const ActivateEmailSubject: string;
                const ActivationCompleteMessage: string;
                const BackToLogin: string;
                const ConfirmEmail: string;
                const ConfirmPassword: string;
                const DisplayName: string;
                const Email: string;
                const FormInfo: string;
                const FormTitle: string;
                const Password: string;
                const SubmitButton: string;
                const Success: string;
            }
        }
    }
    namespace Navigation {
        const LogoutLink: string;
        const SiteTitle: string;
    }
    namespace Site {
        namespace AccessDenied {
            const ClickToChangeUser: string;
            const ClickToLogin: string;
            const LackPermissions: string;
            const NotLoggedIn: string;
            const PageTitle: string;
        }
        namespace BasicProgressDialog {
            const CancelTitle: string;
            const PleaseWait: string;
        }
        namespace BulkServiceAction {
            const AllHadErrorsFormat: string;
            const AllSuccessFormat: string;
            const ConfirmationFormat: string;
            const ErrorCount: string;
            const NothingToProcess: string;
            const SomeHadErrorsFormat: string;
            const SuccessCount: string;
        }
        namespace Dashboard {
            const ContentDescription: string;
        }
        namespace Dialogs {
            const PendingChangesConfirmation: string;
        }
        namespace Layout {
            const FooterCopyright: string;
            const FooterInfo: string;
            const FooterRights: string;
            const GeneralSettings: string;
            const Language: string;
            const Theme: string;
            const ThemeAzure: string;
            const ThemeAzureLight: string;
            const ThemeBlack: string;
            const ThemeBlackLight: string;
            const ThemeBlue: string;
            const ThemeBlueLight: string;
            const ThemeCosmos: string;
            const ThemeCosmosLight: string;
            const ThemeGlassy: string;
            const ThemeGlassyLight: string;
            const ThemeGreen: string;
            const ThemeGreenLight: string;
            const ThemePurple: string;
            const ThemePurpleLight: string;
            const ThemeRed: string;
            const ThemeRedLight: string;
            const ThemeYellow: string;
            const ThemeYellowLight: string;
        }
        namespace RolePermissionDialog {
            const DialogTitle: string;
            const EditButton: string;
            const SaveSuccess: string;
        }
        namespace UserDialog {
            const EditPermissionsButton: string;
            const EditRolesButton: string;
        }
        namespace UserPermissionDialog {
            const DialogTitle: string;
            const Grant: string;
            const Permission: string;
            const Revoke: string;
            const SaveSuccess: string;
        }
        namespace UserRoleDialog {
            const DialogTitle: string;
            const SaveSuccess: string;
        }
        namespace ValidationError {
            const Title: string;
        }
    }
    namespace Validation {
        const AuthenticationError: string;
        const CantFindUserWithEmail: string;
        const CurrentPasswordMismatch: string;
        const DeleteForeignKeyError: string;
        const EmailConfirm: string;
        const EmailInUse: string;
        const InvalidActivateToken: string;
        const InvalidResetToken: string;
        const MinRequiredPasswordLength: string;
        const SavePrimaryKeyError: string;
    }
}
declare namespace Puntonet.LanguageList {
    function getValue(): string[][];
}
declare namespace Puntonet.ScriptInitialization {
}
declare namespace Puntonet.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        getTemplate(): string;
    }
}
declare namespace Puntonet.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Puntonet.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected handleTwoFactorAuthentication(user: string, pass: string, twoFactorGuid: string, info: string): void;
        protected getTemplate(): string;
    }
}
declare namespace Puntonet.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Puntonet.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
