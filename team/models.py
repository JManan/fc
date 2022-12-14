from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class Team(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    position = models.CharField(max_length=50, default='Team Member')
    description = models.TextField(default='this is the desciption')
    id = models.AutoField(primary_key=True)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')



    def __str__(self):
        return f'{self.name}'

    def save(self, *args, **kwargs):
        super(Team, self).save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)

    