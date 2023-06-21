from django.forms import ModelForm
from .models import Photo
from django import forms
from .models import Comment



class PhotoForm(ModelForm):
    class Meta:
        model = Photo
        fields = ['title','comment','image', 'category']



class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('text',)  # コメントのテキストフィールドのみを表示する