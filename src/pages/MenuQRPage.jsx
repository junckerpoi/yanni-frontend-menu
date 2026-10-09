import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

const menuSections = [
  {
    title: 'Cultural Foods',
    accent: '#D7A75C',
    icon: '🍽️',
    items: [
      { name: 'Yanni Special Meat Combo (ያኒ እስፔሻል የፈስግ ኮምቦ)', price: 'ETB --' },
      { name: 'Shekla Tibs (ሸክላ ጥብስ)', price: 'ETB --' },
      { name: 'Tibs (ጥብስ)', price: 'ETB --' },
      { name: 'Dulet (ዱለት)', price: 'ETB --' },
      { name: 'Tibs Tefersho (ጥብስ ተፈርሾ)', price: 'ETB --' },
      { name: 'Enkulal be Siga (እንቁላል በስጋ)', price: 'ETB --' },
      { name: 'Pasta be Siga (ፓስታ በስጋ)', price: 'ETB --' },
      { name: 'Quanta Firfir (ቋንጣ ፍርፍር)', price: 'ETB --' },
      { name: 'Bozena Shiro (ቦዘና ሽሮ)', price: 'ETB --' },
      { name: 'Gomen be Siga (ጎመን በስጋ)', price: 'ETB --' },
      { name: 'Qiqel (ቅቅል)', price: 'ETB --' },
      { name: 'Yanni Special Fish Combo (ያኒ እስፔሻል አሳ ኮምቦ)', price: 'ETB --' },
      { name: 'Asa Lebleb (አሳ ለብለብ)', price: 'ETB --' },
      { name: 'Asa Dulet (አሳ ዱለት)', price: 'ETB --' },
    ],
  },
  {
    title: 'Cultural Foods for Vegans',
    accent: '#2F9E44',
    icon: '🌿',
    items: [
      { name: 'Tegabino (ተጋቢኖ)', price: 'ETB --' },
      { name: 'Shiro Feses (ሽሮ ፈሰስ)', price: 'ETB --' },
    ],
  },
  {
    title: 'Junk Food',
    accent: '#D9485F',
    icon: '🍔',
    items: [
      { name: "Yani's Special Pizza", price: 'ETB --' },
      { name: 'Beef Pizza', price: 'ETB --' },
      { name: 'Tuna Pizza', price: 'ETB --' },
      { name: 'Pizza Margarita', price: 'ETB --' },
      { name: 'Cheese Pizza', price: 'ETB --' },
      { name: 'Special Burger', price: 'ETB --' },
      { name: 'Normal Burger', price: 'ETB --' },
      { name: 'Cheese Burger', price: 'ETB --' },
      { name: 'Beef Burger', price: 'ETB --' },
      { name: 'Rice with Meat', price: 'ETB --' },
      { name: 'Special Fetira', price: 'ETB --' },
      { name: 'Special Shawarma', price: 'ETB --' },
      { name: 'Tuna Sandwich', price: 'ETB --' },
      { name: 'Club Sandwich', price: 'ETB --' },
    ],
  },
  {
    title: 'Junk Foods for Vegans',
    accent: '#59C9A5',
    icon: '🥬',
    items: [
      { name: 'Vegetable Pizza', price: 'ETB --' },
      { name: 'French Fries', price: 'ETB --' },
      { name: 'Special Fries', price: 'ETB --' },
      { name: 'Vegetable Sandwich', price: 'ETB --' },
      { name: 'Pasta be Atkilt (ፓስታ በአትክልት)', price: 'ETB --' },
      { name: 'Pasta be Sigo (ፓስታ በስጎ)', price: 'ETB --' },
    ],
  },
  {
    title: 'Alcohol Drinks',
    accent: '#7B61FF',
    icon: '🥃',
    items: [
      { name: 'Chivas', price: 'ETB --' },
      { name: "Gordon's", price: 'ETB --' },
      { name: 'Black Label', price: 'ETB --' },
      { name: 'Gold Label', price: 'ETB --' },
      { name: 'Tequila', price: 'ETB --' },
      { name: "Jägermeister", price: 'ETB --' },
      { name: 'Grey Goose', price: 'ETB --' },
      { name: 'Don Julio', price: 'ETB --' },
      { name: 'Stolichnaya', price: 'ETB --' },
    ],
  },
  {
    title: 'Beers',
    accent: '#F0B429',
    icon: '🍺',
    items: [
      { name: 'Dashen Beer', price: 'ETB --' },
      { name: 'Heineken Beer', price: 'ETB --' },
      { name: 'Saint George Beer', price: 'ETB --' },
      { name: 'Harar Beer', price: 'ETB --' },
      { name: 'Habesha Beer', price: 'ETB --' },
      { name: 'Anbesa Beer', price: 'ETB --' },
      { name: 'Arada Beer', price: 'ETB --' },
    ],
  },
  {
    title: 'Wine',
    accent: '#C94C4C',
    icon: '🍷',
    items: [
      { name: 'Acacia Wine Red', price: 'ETB --' },
      { name: 'Acacia Wine Rosé', price: 'ETB --' },
      { name: 'Acacia Wine White', price: 'ETB --' },
    ],
  },
  {
    title: 'Soft Drinks',
    accent: '#2F80ED',
    icon: '🥤',
    items: [
      { name: 'Coca Cola', price: 'ETB --' },
      { name: 'Sprite', price: 'ETB --' },
      { name: 'Fanta', price: 'ETB --' },
      { name: 'Mirinda', price: 'ETB --' },
      { name: '7up', price: 'ETB --' },
      { name: 'Red Bull', price: 'ETB --' },
      { name: 'Nigus Malt', price: 'ETB --' },
      { name: 'Ambo Wuha (አምቦ ውሃ)', price: 'ETB --' },
    ],
  },
  {
    title: 'Hot Drinks',
    accent: '#A66D2D',
    icon: '☕',
    items: [
      { name: 'Tea', price: 'ETB --' },
      { name: 'Coffee', price: 'ETB --' },
      { name: 'Macchiato', price: 'ETB --' },
    ],
  },
];

const menuUrl = typeof window === 'undefined'
  ? 'https://your-restaurant-menu.example.com/yannis-yared-menu.html'
  : `${window.location.origin}/yannis-yared-menu.html`;
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(menuUrl)}`;

export default function MenuQRPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, rgba(225,184,103,0.22), transparent 25%), linear-gradient(135deg, #140f0d 0%, #201914 24%, #2d221d 52%, #170f0d 100%)',
        color: '#f5efe6',
        py: { xs: 3, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            mb: 4,
            px: 1,
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              component="img"
              src="/yannis-logo.svg"
              alt="Yanni's Yard logo"
              sx={{
                width: 72,
                height: 72,
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 24px rgba(215,167,92,0.28))',
              }}
            />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
                Yanni's Yard
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(245,239,230,0.65)', letterSpacing: 2, textTransform: 'uppercase' }}>
                Luxury hawassa dining
              </Typography>
            </Box>
          </Stack>

          <Chip
            label="Open today • 11:00–23:00"
            sx={{
              bgcolor: 'rgba(255,255,255,0.06)',
              color: '#f5efe6',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 999,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          />
        </Box>

        <Grid container spacing={4} alignItems="stretch" sx={{ mb: 4 }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 3 }}>
              <Chip
                label="Luxury dining experience"
                sx={{
                  bgcolor: 'rgba(215,167,92,0.12)',
                  color: '#f5d39f',
                  border: '1px solid rgba(215,167,92,0.3)',
                  mb: 2,
                }}
              />
              <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, mb: 2 }}>
                Genuine taste,<br />
                <Box component="span" sx={{ color: '#d7a75c' }}>golden hospitality</Box>
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 620, color: 'rgba(245,239,230,0.74)', lineHeight: 1.8 }}>
                Crafted for guests who enjoy elevated local flavors, refined service, and an unforgettable Hawassa atmosphere from the first scan to the final sip.
              </Typography>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'linear-gradient(135deg, #d7a75c 0%, #a96d2d 100%)',
                  background: 'linear-gradient(135deg, #d7a75c 0%, #a96d2d 100%)',
                  color: '#fff',
                  px: 3,
                  py: 1.4,
                  borderRadius: 999,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
              >
                Scan to order
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: '#f5efe6',
                  borderColor: 'rgba(255,255,255,0.14)',
                  px: 3,
                  py: 1.4,
                  borderRadius: 999,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
              >
                View specialties
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {['Cultural cuisine', 'Vegan options', 'Premium drinks', 'Lakeside dining'].map((label) => (
                <Chip
                  key={label}
                  label={label}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.04)',
                    color: '#f5efe6',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 999,
                    px: 0.5,
                    py: 1.5,
                  }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card
              sx={{
                background: 'linear-gradient(180deg, rgba(31,24,20,0.8), rgba(18,15,13,0.92))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 5,
                boxShadow: '0 24px 46px rgba(0,0,0,0.28)',
                overflow: 'hidden',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="overline" sx={{ color: '#d7a75c', letterSpacing: 2, fontWeight: 700 }}>
                    Menu
                  </Typography>
                  <Chip label="QR" sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: '#f5efe6' }} />
                </Box>

                <Box
                  sx={{
                    background: 'linear-gradient(135deg, rgba(215,167,92,0.12), rgba(255,255,255,0.04))',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 4,
                    p: 2.5,
                    mb: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: -0.8 }}>
                    Yanni's Yard
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(245,239,230,0.6)', letterSpacing: 2, textTransform: 'uppercase' }}>
                    Lakeside dining • Hawassa
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.2, mb: 2, flexWrap: 'wrap' }}>
                  {['🥘', '🍕', '🍸', '🥤', '☕'].map((emoji) => (
                    <Box
                      key={emoji}
                      sx={{
                        width: 42,
                        height: 42,
                        display: 'grid',
                        placeItems: 'center',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontSize: 22,
                        boxShadow: '0 12px 22px rgba(0,0,0,0.18)',
                      }}
                    >
                      {emoji}
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2,
                    mb: 2,
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.9)',
                  }}
                >
                  <img
                    src={qrUrl}
                    alt="QR code for menu"
                    style={{ width: 200, height: 200, borderRadius: 18, display: 'block' }}
                  />
                </Box>

                <Typography variant="h6" sx={{ textAlign: 'center', letterSpacing: 2, textTransform: 'uppercase', mb: 0.5 }}>
                  Scan to explore
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'rgba(245,239,230,0.72)', letterSpacing: 2, textTransform: 'uppercase' }}>
                  Online menu • table 7
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {menuSections.map((section) => (
            <Grid item xs={12} md={6} key={section.title}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 4,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: '12px',
                          background: `${section.accent}22`,
                          border: `1px solid ${section.accent}55`,
                          display: 'grid',
                          placeItems: 'center',
                          fontSize: 22,
                          boxShadow: `0 8px 18px ${section.accent}22`,
                        }}
                      >
                        {section.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          letterSpacing: 1.8,
                          textTransform: 'uppercase',
                          color: '#f5efe6',
                        }}
                      >
                        {section.title}
                      </Typography>
                    </Box>
                    <Chip
                      label={`${section.items.length} items`}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.04)',
                        color: '#f5d39f',
                        border: `1px solid ${section.accent}55`,
                        fontWeight: 700,
                      }}
                    />
                  </Box>

                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 2 }} />

                  <Stack spacing={2}>
                    {section.items.map((item) => (
                      <Box key={item.name + item.price} sx={{ borderBottom: '1px solid rgba(255,255,255,0.06)', pb: 1.4 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'baseline' }}>
                          <Typography sx={{ fontWeight: 700, fontSize: '1.02rem', color: '#fefaf4' }}>
                            {item.name}
                          </Typography>
                          <Typography sx={{ color: '#d7a75c', fontWeight: 700 }}>{item.price}</Typography>
                        </Box>
                        <Typography variant="caption" sx={{ color: 'rgba(245,239,230,0.62)', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                          {section.title}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
