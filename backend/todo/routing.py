from django.urls import re_path, path

from . import consumers

websocket_urlpatterns = [
    path("", consumers.TodoConsumer.as_asgi()),
]