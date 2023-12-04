var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "status" : 0,
  "receipt" : {
    "app_item_id" : 101630733,
    "receipt_creation_date" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
    "receipt_type" : "Production",
    "bundle_id" : "com.MonkeyTaps.Motivation",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1699899752000",
        "expires_date" : "2099-01-01 00:00:00 +0000 Europe/Copenhagen",
        "expires_date_pst" : "2099-01-01 00:00:00 +0000 Europe/Copenhagen",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "101630733",
        "is_trial_period" : "false",
        "original_transaction_id" : "101630733",
        "original_purchase_date_pst" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
        "product_id" : "com.monkeytaps.motivation.premium.year3",
        "purchase_date" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
        "original_purchase_date_ms" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
        "expires_date_ms" : "4070908800000",
        "purchase_date_pst" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
        "original_purchase_date" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen"
      }
    ],
    "download_id" : 101630733,
    "adam_id" : 101630733,
    "receipt_creation_date_pst" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
    "request_date" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
    "request_date_pst" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
    "version_external_identifier" : 0,
    "request_date_ms" : "1699899752000",
    "original_purchase_date_pst" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
    "application_version" : "5.23.0",
    "original_purchase_date_ms" : "1699899752000",
    "receipt_creation_date_ms" : "1699899752000",
    "original_application_version" : "5.23.0",
    "original_purchase_date" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen"
  },
  "environment" : "Production",
  "latest_receipt" : "eyJhcHBfaXRlbV9pZCI6MTAxNjMwNzMzLCJyZWNlaXB0X2NyZWF0aW9uX2RhdGUiOiIyMDIzLTExLTEzIDE4OjIyOjMyICswMDAwIEV1cm9wZVwvQ29wZW5oYWdlbiIsInJlY2VpcHRfdHlwZSI6IlByb2R1Y3Rpb24iLCJidW5kbGVfaWQiOiJjb20uTW9ua2V5VGFwcy5Nb3RpdmF0aW9uIiwib3JpZ2luYWxfcHVyY2hhc2VfZGF0ZSI6IjIwMjMtMTEtMTMgMTg6MjI6MzIgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwiaW5fYXBwIjpbeyJxdWFudGl0eSI6IjEiLCJwdXJjaGFzZV9kYXRlX21zIjoiMTY5OTg5OTc1MjAwMCIsImV4cGlyZXNfZGF0ZSI6IjIwOTktMDEtMDEgMDA6MDA6MDAgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwiZXhwaXJlc19kYXRlX3BzdCI6IjIwOTktMDEtMDEgMDA6MDA6MDAgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwiaXNfaW5faW50cm9fb2ZmZXJfcGVyaW9kIjoiZmFsc2UiLCJ0cmFuc2FjdGlvbl9pZCI6IjEwMTYzMDczMyIsImlzX3RyaWFsX3BlcmlvZCI6ImZhbHNlIiwib3JpZ2luYWxfdHJhbnNhY3Rpb25faWQiOiIxMDE2MzA3MzMiLCJvcmlnaW5hbF9wdXJjaGFzZV9kYXRlX3BzdCI6IjIwMjMtMTEtMTMgMTg6MjI6MzIgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwicHJvZHVjdF9pZCI6IiIsInB1cmNoYXNlX2RhdGUiOiIyMDIzLTExLTEzIDE4OjIyOjMyICswMDAwIEV1cm9wZVwvQ29wZW5oYWdlbiIsIm9yaWdpbmFsX3B1cmNoYXNlX2RhdGVfbXMiOiIyMDIzLTExLTEzIDE4OjIyOjMyICswMDAwIEV1cm9wZVwvQ29wZW5oYWdlbiIsImV4cGlyZXNfZGF0ZV9tcyI6IjQwNzA5MDg4MDAwMDAiLCJwdXJjaGFzZV9kYXRlX3BzdCI6IjIwMjMtMTEtMTMgMTg6MjI6MzIgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwib3JpZ2luYWxfcHVyY2hhc2VfZGF0ZSI6IjIwMjMtMTEtMTMgMTg6MjI6MzIgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIn1dLCJhZGFtX2lkIjoxMDE2MzA3MzMsInJlY2VpcHRfY3JlYXRpb25fZGF0ZV9wc3QiOiIyMDIzLTExLTEzIDE4OjIyOjMyICswMDAwIEV1cm9wZVwvQ29wZW5oYWdlbiIsInJlcXVlc3RfZGF0ZSI6IjIwMjMtMTEtMTMgMTg6MjI6MzIgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwicmVxdWVzdF9kYXRlX3BzdCI6IjIwMjMtMTEtMTMgMTg6MjI6MzIgKzAwMDAgRXVyb3BlXC9Db3BlbmhhZ2VuIiwidmVyc2lvbl9leHRlcm5hbF9pZGVudGlmaWVyIjowLCJyZXF1ZXN0X2RhdGVfbXMiOiIxNjk5ODk5NzUyMDAwIiwib3JpZ2luYWxfcHVyY2hhc2VfZGF0ZV9wc3QiOiIyMDIzLTExLTEzIDE4OjIyOjMyICswMDAwIEV1cm9wZVwvQ29wZW5oYWdlbiIsImFwcGxpY2F0aW9uX3ZlcnNpb24iOiI1LjIzLjAiLCJvcmlnaW5hbF9wdXJjaGFzZV9kYXRlX21zIjoiMTY5OTg5OTc1MjAwMCIsInJlY2VpcHRfY3JlYXRpb25fZGF0ZV9tcyI6IjE2OTk4OTk3NTIwMDAiLCJvcmlnaW5hbF9hcHBsaWNhdGlvbl92ZXJzaW9uIjoiNS4yMy4wIiwiZG93bmxvYWRfaWQiOjEwMTYzMDczM30=",
      "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1699899752000",
      "expires_date" : "2099-01-01 00:00:00 +0000 Europe/Copenhagen",
      "expires_date_pst" : "2099-01-01 00:00:00 +0000 Europe/Copenhagen",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "101630733",
      "is_trial_period" : "false",
      "original_transaction_id" : "101630733",
      "original_purchase_date_pst" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
      "product_id" : "com.monkeytaps.motivation.premium.year3",
      "purchase_date" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
      "original_purchase_date_ms" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
      "expires_date_ms" : "4070908800000",
      "purchase_date_pst" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen",
      "original_purchase_date" : "2023-11-13 18:22:32 +0000 Europe/Copenhagen"
    }
  ],
  "pending_renewal_info" : [
    {
      "product_id" : "com.monkeytaps.motivation.premium.year3",
      "original_transaction_id" : "248F81A8-5023-4542-B88E-29F6ABC3E754",
      "auto_renew_product_id" : "",
      "auto_renew_status" : "1"
    }
  ]
}
body = JSON.stringify(obj);
$done({body});
