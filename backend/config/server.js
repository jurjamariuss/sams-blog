module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'dd5674a9165c819a65af2e01a749acb3'),
    },
    url: env('PUBLIC_ADMIN_URL', '/api/admin'),
  },
});
