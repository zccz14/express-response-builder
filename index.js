function Report(code, msg, body) {
    return {
        code: code,
        msg: msg,
        body: body
    };
}

function SuccessReport(body) {
    return Report(0, 'ok', body || {});
}


function BUGReport(err) {
    console.log(err);
    return Report(-1, 'unexpected error', {});
}

function PermissionDeniedReport() {
    return Report(403, 'permission denied', {});
}

function NotFoundReport() {
    return Report(404, 'not found', {});
}

module.exports = {
    Report: Report,
    BUGReport: BUGReport,
    SuccessReport: SuccessReport,
    PermissionDeniedReport: PermissionDeniedReport,
    NotFoundReport: NotFoundReport,
};
