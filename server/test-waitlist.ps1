# PowerShell script to test the waitlist endpoint
# Usage: .\test-waitlist.ps1

$body = @{
    email = "test@example.com"
    name = "Test User"
    club = "Test Club, Test City"
} | ConvertTo-Json

Write-Host "🧪 Testing waitlist endpoint..." -ForegroundColor Cyan
Write-Host "📤 Sending request to http://localhost:3001/waitlist" -ForegroundColor Yellow
Write-Host "📋 Payload: $body" -ForegroundColor Gray

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3001/waitlist" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body
    
    Write-Host "✅ Success!" -ForegroundColor Green
    Write-Host "📥 Response: $($response | ConvertTo-Json)" -ForegroundColor Green
    
    if ($response.success) {
        Write-Host "✅ Form submission successful! Check your Notion database." -ForegroundColor Green
    } else {
        Write-Host "⚠️  Response received but success flag is false" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Error occurred:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    if ($_.ErrorDetails.Message) {
        $errorDetails = $_.ErrorDetails.Message | ConvertFrom-Json
        Write-Host "Error details: $($errorDetails.error)" -ForegroundColor Red
    }
}
