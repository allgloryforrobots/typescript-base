function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}

// ========

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function parseResponse(response: MyResponse | MyError) {
    if (response instanceof MyResponse) {
        return response.result
    } else {
        return response.message
    }
}

// =======

type AlertType = 'success' | 'info' | 'warning' | 'danger'

function parseAlertType(alertType: AlertType) {

}

parseAlertType('success')
// parseAlertType('wrong')
















/////