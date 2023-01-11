from django.db import models
from django.utils import timezone
from django.dispatch import receiver

class Coin(models.Model):
    title = models.CharField(null=True, max_length=255, blank=True)
    subtitle = models.CharField(null=True, max_length=255, blank=True)
    price = models.FloatField(blank=True, null=True)
    grade = models.CharField(null=True, max_length=100, blank=True)
    sold = models.CharField(null=True, max_length=50, blank=True)
    obverse_description = models.CharField(null=True, max_length=255, blank=True)
    reverse_description = models.CharField(null=True, max_length=255, blank=True)
    km_number = models.CharField(null=True, max_length=50, blank=True)
    weight = models.FloatField(null=True, blank=True)
    numiscorner_id = models.IntegerField(null=True, blank=True)
    product_url = models.CharField(null=True, max_length=255, blank=True)
    country = models.CharField(null=True, max_length=100, blank=True)
    denomination = models.CharField(null=True, max_length=100, blank=True)
    year = models.CharField(null=True, max_length=100, blank=True)
    coin_condition = models.CharField(null=True, max_length=100, blank=True)
    mint_name = models.CharField(null=True, max_length=100, blank=True)
    composition = models.CharField(null=True, max_length=100, blank=True)
    coinage_type = models.CharField(null=True, max_length=100, blank=True)
    diameter = models.FloatField(null=True, blank=True)
    first_issue_date = models.CharField(null=True, max_length=100, blank=True)
    mintage = models.IntegerField(null=True, blank=True)
    period = models.CharField(null=True, max_length=100, blank=True)
    ruler_name = models.CharField(null=True, max_length=100, blank=True)
    theoretical_coin_weight = models.FloatField(null=True, blank=True)
    edge_lettering = models.CharField(null=True, max_length=255, blank=True)
    mint_mark = models.CharField(null=True, max_length=100, blank=True)
    coin_name = models.CharField(null=True, max_length=100, blank=True)
    mint_location = models.CharField(null=True, max_length=100, blank=True)
    edge_desc = models.CharField(null=True, max_length=100, blank=True)
    specific_remark = models.CharField(null=True, max_length=100, blank=True)
    actual_weight = models.FloatField(null=True, blank=True)
    fineness = models.FloatField(null=True, blank=True)
    geographic_area = models.CharField(null=True, max_length=100, blank=True)
    strike_mark = models.CharField(null=True, max_length=50, blank=True)
    subject = models.CharField(null=True, max_length=100, blank=True)
    main_character = models.CharField(null=True, max_length=100, blank=True)
    series = models.CharField(null=True, max_length=100, blank=True)
    coin_shape = models.CharField(null=True, max_length=100, blank=True)
    certification = models.CharField(null=True, max_length=100, blank=True)
    certification_number = models.IntegerField(null=True, blank=True)
    series_theme = models.CharField(null=True, max_length=100, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return ' '.join([self.denomination, self.country])

class Image(models.Model):
    coin_id = models.ForeignKey(Coin, on_delete=models.CASCADE)
    order = models.IntegerField(null=False)
    image_url = models.CharField(max_length=255, null=True)
    pictogram = models.ImageField(upload_to='numiscorner/pictograms', null=True)
    image = models.ImageField(upload_to='numiscorner', null=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('order',)


@receiver(models.signals.post_delete, sender=Image)
def delete_image_file(sender, instance, **kwargs):
    # Deletes Image Renditions
    # Deletes Original Image
    instance.pictogram.delete(save=False)
    instance.image.delete(save=False)
    