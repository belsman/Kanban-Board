from rest_framework.status import HTTP_200_OK, HTTP_401_UNAUTHORIZED
from rest_framework.views import exception_handler
from board.views import ObtainAuthUser

def custom_exception_handler(exc, context):
    is_auth_user_view = context['view'].get_view_name() == ObtainAuthUser().get_view_name()
    response = exception_handler(exc, context)

    is_unauthorized = response.status_code == HTTP_401_UNAUTHORIZED
    accessing_user_auth_view = is_unauthorized and is_auth_user_view
    
    if response is not None:
        if accessing_user_auth_view:
            del response.data['detail']
            response.status_code = HTTP_200_OK

    return response