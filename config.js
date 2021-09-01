const env = 'staging'

const config = {
    'dev':{
        // user info
        'USER_NAME': 'b3vm4i99klzd29bqgvr1za154@tstmail.link',
        'User_PASSWORD': '126Legenecy',
        // panel info
        'Panelname': 'abbasHome',
        'Panel_Serial_Number': '75W25-K1HL2E0760075',
        'Panelname_Cobalt':'blackburnCobalt',
        'Panel_Serial_Number_Cobalt': '65W25-KCHB2N0120001',
        'Panelname_Nickel': 'blackburnNickel',
        'Panel_Serial_Number_Nickel': '65W26-J2KL2N0380172',
        // env url
        'Panel_management_url': 'https://dev-panel-management.prometheanproduct.com/',
        'User_management_url': 'https://dev-user-management.prometheanproduct.com/',
        'MyPromethean_url': 'https://devportal.prometheanproduct.com/',
        'Org_support_url': 'https://dev-org-support.prometheanproduct.com/',
        'Resourcelibrary_url': 'https://devresourcelibrary.prometheanproduct.com/',
        // myPrometheanInfo
        'Erroremailcode': '517146',
        'Newpassword': '126Legenecy1',
        'Invalidemailcode': 'test_error_code' 
    },
    'sandbox':{
        // user info
        'USER_NAME': 'b3vm4i99klzd29bqgvr1za154@tstmail.link',
        'User_PASSWORD': '126Legenecy',
        // panel info
        'Panelname': 'abbasHome',
        'Panel_Serial_Number': '75W25-K1HL2E0760075',
        'Panelname_Cobalt':'blackburnCobalt',
        'Panel_Serial_Number_Cobalt': '65W25-KCHB2N0120001',
        'Panelname_Nickel': 'blackburnNickel',
        'Panel_Serial_Number_Nickel': '65W26-J2KL2N0380172',
        // env url
        'Panel_management_url': 'https://sandbox-panel-management.prometheanproduct.com/',
        'User_management_url': 'https://sandbox-user-management.prometheanproduct.com/',
        'MyPromethean_url': 'https://sandboxportal.prometheanproduct.com/',
        'Org_support_url': 'https://sandbox-org-support.prometheanproduct.com/',
        'Resourcelibrary_url': 'https://sandboxresourcelibrary.prometheanproduct.com/',
        // myPrometheanInfo
        'Erroremailcode': '517146',
        'Newpassword': '126Legenecy1',
        'Invalidemailcode': 'test_error_code'  
    },
    'staging': {
        // user info
        'USER_NAME': 'nilito8555@astarmax.com',
        'User_PASSWORD': '126Legenecy',
        // panel info
        'Panelname': 'abbasHome',
        'Panel_Serial_Number': '75W25-K1HL2E0760075',
        'Panelname_Cobalt':'blackburnCobalt',
        'Panel_Serial_Number_Cobalt': '65W25-KCHB2N0120001',
        'Panelname_Nickel': 'blackburnNickel',
        'Panel_Serial_Number_Nickel': '65W26-J2KL2N0380172',
        // env url
        'Panel_management_url': 'https://panel-management.staging.mypromethean.com/',
        'User_management_url': 'https://user-management.staging.mypromethean.com/',
        'MyPromethean_url': 'https://portal.staging.mypromethean.com/',
        'Org_support_url': 'https://org-support.staging.mypromethean.com/',
        'Resourcelibrary_url': 'https://resourcelibrary.staging.mypromethean.com/',
        // myPrometheanInfo
        'Erroremailcode': '517146',
        'Newpassword': '126Legenecy1',
        'Invalidemailcode': 'test_error_code'   
    },
    'production':{}
}

exports.CONFIG = config[env]